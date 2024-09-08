package yt_test;

import com.intuit.karate.junit5.Karate;

class YTTestRunner {

    @Karate.Test
    Karate runYTTest() {
        /* return Karate.run("GET", "POST").relativeTo(getClass()); */
        return Karate.run("DELETE").relativeTo(getClass());
    }

}
