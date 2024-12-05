package at.freelenzer.invoice;

import at.freelenzer.invoice.model.Customer;
import at.freelenzer.invoice.model.Invoice;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/api/customers")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
public class CustomerResource {

    @GET
    public List<Customer> list() {
        return Customer.listAll();
    }

    @POST
    public Response create(Customer customer) {
        customer.persist();
        return Response.created(null).entity(customer).build();
    }

    @POST
    @Path("/{customer_id}/invoices")
    public Response invoiceCreate(@PathParam("customer_id") Long customerId, InvoiceUpdate invoiceData) {
        Customer c = Customer.findById(customerId);
        if (c == null) {
            throw new NotFoundException();
        }
        Invoice invoice = new Invoice();
        invoice.date = invoiceData.date;
        invoice.text = invoiceData.text;
        invoice.locale = invoiceData.locale;
        invoice.customer = c;
        invoice.persist();
        return Response.created(null).entity(invoice).build();
    }
    @GET
    @Path("/{customer_id}/invoices")
    public List<Invoice> invoices(@PathParam("customer_id") Long customerId) {
        Customer c = Customer.findById(customerId);
        if (c == null) {
            throw new NotFoundException();
        }
        return Invoice.list("customer", c);
    }

}