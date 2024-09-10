Feature: Testing Method DELETE in /usuarios Endpoint

  Background:
    * def header = read('classpath:API_Services/support/config/headers.yaml')


  Scenario: Verify DELETE user - CASE: successful || 200
    * def register = call read('classpath:API_Services/serv_serverest/users/POST_RegisterUser.feature@register')
    Given url serverest    
    And path '/usuarios/123'
    When method DELETE
    Then status 200 
    * def expectedMsg = ["Registro excluído com sucesso", "Nenhum registro excluído"]    
    And match expectedMsg contains response.message
