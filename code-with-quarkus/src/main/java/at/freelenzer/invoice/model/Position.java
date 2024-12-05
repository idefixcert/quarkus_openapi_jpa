package at.freelenzer.invoice.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
public class Position extends PanacheEntity {
    @ManyToOne
    @JoinColumn(name="invoice_id", nullable=false)
    public Invoice invoice;
    public String text;
    public String count;
    public String unit;
    public float pricePerUnit;
    public float amount;
    @Embedded
    public Tax tax;
}