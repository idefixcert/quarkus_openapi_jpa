package at.freelenzer.person;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.net.URI;
import java.util.List;

@Path("/dogs")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DogResource {

    @GET
    public List<Dog> list() {
        return Dog.listAll();
    }

    @GET
    @Path("/{id}")
    public Dog get(@PathParam("id") Long id) {
        Dog dog = Dog.findById(id);
        if (dog == null) {
            throw new NotFoundException();
        }
        return dog;
    }

    @POST
    @Transactional
    public Response create(Dog dog) {
        dog.persist();
        return Response.created(URI.create("/dogs/" + dog.id)).entity(dog).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(@PathParam("id") Long id) {
        Dog entity = Dog.findById(id);
        if(entity == null) {
            //throw new NotFoundException();
            return;
        }
        entity.owner.dogs.remove(entity);
        entity.delete();
    }


}