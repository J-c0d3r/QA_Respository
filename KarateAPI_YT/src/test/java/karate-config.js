function fn() {

  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);

  if (!env) {
    env = 'dev';
  }

  var config = {
    env: env,
    myVarName: 'someValue',
    baseUrl: 'https://reqres.in/api'
  }

  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }

  //Config max time to each requesting - Performance Test
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000)

  return config;
}
