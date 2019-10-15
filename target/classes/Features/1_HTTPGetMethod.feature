#Author: SaranKumar
@tag
Feature: To test Get List of all Video Game data available

  @tag1
  Scenario: Get all Video Game details
    Given Get all the video game data available in database
    Then verify status code "200"
    
    
