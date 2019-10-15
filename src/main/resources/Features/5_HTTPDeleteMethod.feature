#Author: SaranKumar
@tag
Feature: To Delete Specific data by ID Video Game data available

  @tag1
  Scenario Outline: Delete Video Game details by id
    Given Delete Specific video game data available in database by id "<id>"
    Then verify status code "200"
    Then verify Json body delete message
Examples:
|id|
|14|
