package API_Services.serv_serverest;

import com.intuit.karate.junit5.Karate;

class ServeRestTestRunner {

    @Karate.Test
    Karate runRRTest() {
        return Karate.run().relativeTo(getClass());
        /* return Karate.run("POST_RegisterUser").relativeTo(getClass()); */
    }

}
