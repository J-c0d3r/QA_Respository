Feature: Testing Method GET in /usuarios Endpoint

  Background:
    * def header = read('classpath:API_Services/support/config/headers.yaml')

  Scenario Outline: Verify if user has been registered correctly with status <status_code>
    * def register = call read('classpath:API_Services/serv_serverest/users/POST_RegisterUser.feature@register')
    Given url serverest
    And path '/usuarios/' + register.response._id
    When method GET
    Then status <status_code>    
    And match response contains { email : '#regex .*\\@test\\.com', nome: '#string'}

    Examples:
      | status_code |
      | 200         |





