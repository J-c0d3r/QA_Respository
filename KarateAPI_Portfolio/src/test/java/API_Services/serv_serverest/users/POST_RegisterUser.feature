Feature: Testing Method POST in /usuarios Endpoint

  Background:
    * def header = read('classpath:API_Services/support/config/headers.yaml')
    * def yaml = read('classpath:API_Services/serv_serverest/data/yaml/' + env + '/login.yaml')


    @register
  Scenario Outline: Verify POST on /usuarios CASE: Successful || <status_code>
    * def email = Java.type('API_Services.support.utils.utils').GenerateEmail()
    * def password = Java.type('API_Services.support.utils.utils').RandomNumEight()
    * def name = Java.type('API_Services.support.utils.utils').GenerateRandomName()
    * def adm = Java.type('API_Services.support.utils.utils').GenerateBoolean().toString()
    * def body = read('classpath:API_Services/serv_serverest/data/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status <status_code>
    And match response contains { _id: "#string", "message": "Cadastro realizado com sucesso"}

    Examples:
      | status_code |
      | 201         |      


  Scenario: Verify POST on /usuarios CASE: Duplicated Email || 400
    * def registeredUser = call read('classpath:API_Services/serv_serverest/users/POST_RegisterUser.feature@register')
    * def email = registeredUser.email
    * def password = registeredUser.password
    * def name = registeredUser.name
    * def adm = registeredUser.adm
    * def body = read('classpath:API_Services/serv_serverest/data/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status 400    
    And match $.message == "Este email já está sendo usado"


  Scenario Outline: Verify POST on /usuarios CASE: <test_case> || <status_code>
    * def email = <email>
    * def password = <password>
    * def name = <name>
    * def adm = <adm>
    * def body = read('classpath:API_Services/serv_serverest/data/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status <status_code>
    And match response != {}
    * print response

    Examples:
      | status_code | test_case     | email                                                         | password                                                       | name                                                               | adm                                                                        |
      | 201         | successful    | Java.type('API_Services.support.utils.utils').GenerateEmail() | Java.type('API_Services.support.utils.utils').RandomNumEight() | Java.type('API_Services.support.utils.utils').GenerateRandomName() | Java.type('API_Services.support.utils.utils').GenerateBoolean().toString() |
      | 400         | null email    | ""                                                            | Java.type('API_Services.support.utils.utils').RandomNumEight() | Java.type('API_Services.support.utils.utils').GenerateRandomName() | Java.type('API_Services.support.utils.utils').GenerateBoolean().toString() |
      | 400         | null password | Java.type('API_Services.support.utils.utils').GenerateEmail() | ""                                                             | Java.type('API_Services.support.utils.utils').GenerateRandomName() | Java.type('API_Services.support.utils.utils').GenerateBoolean().toString() |
      | 400         | null name     | Java.type('API_Services.support.utils.utils').GenerateEmail() | Java.type('API_Services.support.utils.utils').RandomNumEight() | ""                                                                 | Java.type('API_Services.support.utils.utils').GenerateBoolean().toString() |
      | 400         | null adm      | Java.type('API_Services.support.utils.utils').GenerateEmail() | Java.type('API_Services.support.utils.utils').RandomNumEight() | Java.type('API_Services.support.utils.utils').GenerateRandomName() | ""                                                                         |
      | 400         | invalid email | "testestestsetse"                                             | Java.type('API_Services.support.utils.utils').RandomNumEight() | Java.type('API_Services.support.utils.utils').GenerateRandomName() | Java.type('API_Services.support.utils.utils').GenerateBoolean().toString() |


    Scenario: Verify POST on /usuarios CASE: invalid json resquest post || 400
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation    
    And request {"test":"testNumber01"}    
    When method POST    
    Then status 400    
    And match response.test == "test não é permitido"
