/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * This class defines a CalculatorResource.
 */

@Path("v{version}/calculators/{id}")
@Named
public class CalculatorResource {

    private final Long value;

    public CalculatorResource() {
        value = 0L;
    }

    public CalculatorResource(Long initialValue) {
        this.value = initialValue;
    }

    @GET
    public Long getValue() {
        return value;
    }

    @Path("+{value}")
    public CalculatorResource add(@PathParam("value") Long value) {
        return new CalculatorResource(this.value + value);
    }

    @Path("-{value}")
    public CalculatorResource subtract(@PathParam("value") Long value) {
        return new CalculatorResource(this.value - value);
    }

    @Path("*{value}")
    public CalculatorResource multiply(@PathParam("value") Long value) {
        return new CalculatorResource(this.value * value);
    }

}
