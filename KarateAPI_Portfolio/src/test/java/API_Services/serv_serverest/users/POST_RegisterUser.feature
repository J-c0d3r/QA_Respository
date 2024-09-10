Feature: Testing Method POST in /usuarios Endpoint

  Background:
    * def header = read('classpath:API_Services/support/config/headers.yaml')
    * def yaml = read('classpath:API_Services/serv_serverest/data/yaml/' + env + '/login.yaml')


    @register
  Scenario Outline: Verify POST on /usuarios with status code <status_code>
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


    @login
  Scenario Outline: Verify POST on /login with status code <status_code> and password <type_password>
    * def register = call read('classpath:API_Services/serv_serverest/users/POST_RegisterUser.feature@register')
    * def email = register.email
    * def password = <password>
    * def body = read('classpath:API_Services/serv_serverest/data/payload/' + env + '/login.json')
    Given url serverest
    And path '/login'
    And headers header.headers_presentation
    And request body          
    When method POST
    Then status <status_code>       
    * match $.<subgroupJson> == <message>

    Examples:
      | status_code | password                        | type_password | subgroupJson | message                            |
      | 200         | register.password               | normal        | message      | 'Login realizado com sucesso'      |
      | 400         | yaml.password.password_null     | null          | password     | 'password não pode ficar em branco'|
      | 401         | yaml.password.password_invalid  | invalid       | message      | 'Email e/ou senha inválidos'       |

      
