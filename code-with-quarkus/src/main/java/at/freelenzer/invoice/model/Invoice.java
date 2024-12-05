package at.freelenzer.invoice.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.panache.common.Sort;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Invoice extends PanacheEntity {
    public String identifier;
    public String text;
    public String locale;
    public LocalDate date;
    public float amount;
    @ElementCollection(fetch = FetchType.EAGER)
    public List<Tax> taxes;
    @ManyToOne
    public Customer customer;
    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    public List<Position> positions;


    public static List<Invoice> findByAllName(String name) {
        String search ="%"+name.toLowerCase()+"%";
        return find("lower(name) like ?1", Sort.by("name"), search).list();
    }


}