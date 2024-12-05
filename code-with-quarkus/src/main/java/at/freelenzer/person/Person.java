package at.freelenzer.person;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.panache.common.Sort;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Person extends PanacheEntity {
    public String name;
    public LocalDate birth;
    public Status status;

    @OneToMany(mappedBy = "owner",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    public List<Dog> dogs;


    public static Person findByName(String name) {
        return find("name", name).firstResult();
    }

    public static List<Person> findByAllName(String name) {
        //return find("name", Sort.by("name").and("birth"), name).list();
        return find("lower(name) = lower(?1)", Sort.by("name").and("birth"), name).list();
    }

    public static List<Person> findAlive() {
        return list("status", Status.Alive);
    }

    public static void deleteStefs() {
        delete("name", "Stef");
    }
}