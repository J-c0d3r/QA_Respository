package API_Services.serv_serverest;

import com.intuit.karate.junit5.Karate;

class ServeRestTestRunner {

    //String file = "/users/" + "GET_GetProducts";

    @Karate.Test
    Karate runServrestTest() {
        return Karate.run().relativeTo(getClass());
        /* return Karate.run(file).relativeTo(getClass()); */
    }

}
