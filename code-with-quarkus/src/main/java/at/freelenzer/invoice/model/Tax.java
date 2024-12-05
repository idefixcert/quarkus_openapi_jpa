package at.freelenzer.invoice.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Tax {
    // Tax rate in percent
    public float taxRate;
    // Total from what tax is calculated
    public float taxTotal;
    // Amount of tax
    public float taxAmount;
}
