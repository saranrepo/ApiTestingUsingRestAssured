#Author: SaranKumar
@tag
Feature: To test Specific data by ID Video Game data available

  @tag1
  Scenario Outline: Get Video Game details by id
    Given Get Specific video game data available in database by id "<id>"
    Then verify status code "200"
    And verify the id "<id>" and name "<name>"    
Examples:
|id|name|
|2|Gran Turismo 3|
