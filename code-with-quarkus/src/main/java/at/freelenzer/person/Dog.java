package at.freelenzer.person;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.json.bind.annotation.JsonbProperty;
import jakarta.json.bind.annotation.JsonbSubtype;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.json.bind.annotation.JsonbVisibility;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import io.quarkus.hibernate.orm.panache.common.ProjectedFieldName;

@Entity
public class Dog extends PanacheEntity {
    public String name;
    public String race;
    public Double weight;
    @ManyToOne
    @JsonbTransient
    public Person owner;
    public Long getOwnerId() {
        if (owner == null) {
            return -1L;
        }
        return owner.id;
    }
}