package tests_content.aula.star_wars;

import com.intuit.karate.junit5.Karate;

class SwRunner {

    @Karate.Test
    Karate testStarWars() {
        return Karate.run("star_wars").relativeTo(getClass());
    }

}
