package tests_content.trabalho;

import com.intuit.karate.junit5.Karate;

class Rick_MortyRunner {

    @Karate.Test
    Karate rickMorty() {
        return Karate.run("rick_morty").relativeTo(getClass());
    }

}
