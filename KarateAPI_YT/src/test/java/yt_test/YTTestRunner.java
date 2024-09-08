package yt_test;

import com.intuit.karate.junit5.Karate;
import org.junit.BeforeClass;

class YTTestRunner {

    @BeforeClass
    public static void before() {
        System.setProperty("karate.env", "qa");
    }

    @Karate.Test
    Karate runYTTest() {
        return Karate.run().relativeTo(getClass());
        /* return Karate.run("PUT").relativeTo(getClass()); */
    }

}
