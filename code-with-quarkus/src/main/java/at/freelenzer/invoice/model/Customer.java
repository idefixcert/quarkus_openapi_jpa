package at.freelenzer.invoice.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.panache.common.Sort;
import jakarta.persistence.Entity;

import java.util.List;

@Entity
public class Customer extends PanacheEntity {
    public String name;
    public String address;
    public String email;
    public String locale;


    public static List<Customer> findByAllName(String name) {
        String search ="%"+name.toLowerCase()+"%";
        return find("lower(name) like ?1", Sort.by("name"), search).list();
    }
}