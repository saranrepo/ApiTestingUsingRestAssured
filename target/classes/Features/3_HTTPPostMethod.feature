#Author: SaranKumar
@tag
Feature: To add a data to videoGame api

  @tag1
  Scenario Outline: Add data to Video Game Api
    Given Read the data need to be post "<id>","<name>","<releaseDate>","<category>","<rating>","<reviewScore>"
    Then verify status code "200"
    Then verify Json body message
 
Examples:
|id|name|releaseDate|category|rating|reviewScore|
|15|TrailVideoGame|2019-10-13T00:40:48.058Z|Combat|Good|30|
    
    
