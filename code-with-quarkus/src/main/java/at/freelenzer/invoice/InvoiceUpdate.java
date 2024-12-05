package at.freelenzer.invoice;

import at.freelenzer.invoice.model.Customer;
import at.freelenzer.invoice.model.Position;
import at.freelenzer.invoice.model.Tax;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

public class InvoiceUpdate {
    public String identifier;
    public String text;
    public String locale;
    public LocalDate date;
}
