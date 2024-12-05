package at.freelenzer.person;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.net.URI;
import java.util.List;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonResource {

    @GET
    public List<Person> list() {
        return Person.listAll();
    }

    @GET
    @Path("/{id}")
    public Person get(@PathParam("id") Long id) {
        return Person.findById(id);
    }

    @POST
    @Transactional
    public Response create(Person person) {
        person.persist();
        return Response.created(URI.create("/persons/" + person.id)).entity(person).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Person update(@PathParam("id") Long id, Person person) {
        Person entity = Person.findById(id);
        if (entity == null) {
            throw new NotFoundException();
        }

        // map all fields from the person parameter to the existing entity
        entity.name = person.name;
        entity.birth = person.birth;
        entity.status = person.status;
        person.persist();
        return entity;
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(@PathParam("id") Long id) {
        Person entity = Person.findById(id);
        if (entity == null) {
            //throw new NotFoundException();
            return;
        }
        entity.delete();
    }

    @GET
    @Path("/search/{name}")
    public Person search(@PathParam("name") String name) {
        return Person.findByName(name);
    }

    @GET
    @Path("/search")
    public List<Person> searchAll(@QueryParam("name") @DefaultValue("Stef") String name) {
        return Person.findByAllName(name);
    }

    @GET
    @Path("/count")
    public Long count() {
        return Person.count();
    }


    @GET
    @Path("/{person_id}/dogs")
    public List<Dog> getDogs(@PathParam("person_id") Long person_id) {
        Person owner = Person.findById(person_id);
        if (owner == null) {
            throw new NotFoundException();
        }
        //return Dog.list("owner",owner);
        return owner.dogs;
    }

    @GET
    @Path("/{person_id}/dogs/{id}")
    public Dog getDog(@PathParam("person_id") Long person_id, @PathParam("id") Long id) {
        Dog dog = Dog.findById(id);
        if (dog == null) {
            throw new NotFoundException();
        }
        return dog;
    }

    @POST
    @Path("/{person_id}/dogs")
    @Transactional
    public Response create(@PathParam("person_id") Long person_id, Dog dog) {
        Person owner = Person.findById(person_id);
        if (owner == null) {
            throw new NotFoundException();
        }
        dog.owner = owner;
        //  dog.persist();
        owner.dogs.add(dog);
        owner.persist();
        return Response.created(URI.create("/dogs/" + dog.id)).entity(dog).build();
    }
}