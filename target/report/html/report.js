$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_HTTPGetMethod.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SaranKumar"
    }
  ],
  "line": 3,
  "name": "To test Get List of all Video Game data available",
  "description": "",
  "id": "to-test-get-list-of-all-video-game-data-available",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Get all Video Game details",
  "description": "",
  "id": "to-test-get-list-of-all-video-game-data-available;get-all-video-game-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Get all the video game data available in database",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Glue.get_all_the_video_game_data_available_in_database()"
});
formatter.result({
  "duration": 2833229470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Glue.verify_status_code(String)"
});
formatter.result({
  "duration": 6572114,
  "status": "passed"
});
formatter.uri("2_GetMethodById.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SaranKumar"
    }
  ],
  "line": 3,
  "name": "To test Specific data by ID Video Game data available",
  "description": "",
  "id": "to-test-specific-data-by-id-video-game-data-available",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Get Video Game details by id",
  "description": "",
  "id": "to-test-specific-data-by-id-video-game-data-available;get-video-game-details-by-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Get Specific video game data available in database by id \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify the id \"\u003cid\u003e\" and name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-test-specific-data-by-id-video-game-data-available;get-video-game-details-by-id;",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 11,
      "id": "to-test-specific-data-by-id-video-game-data-available;get-video-game-details-by-id;;1"
    },
    {
      "cells": [
        "2",
        "Gran Turismo 3"
      ],
      "line": 12,
      "id": "to-test-specific-data-by-id-video-game-data-available;get-video-game-details-by-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Get Video Game details by id",
  "description": "",
  "id": "to-test-specific-data-by-id-video-game-data-available;get-video-game-details-by-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Get Specific video game data available in database by id \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify the id \"2\" and name \"Gran Turismo 3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "Glue.get_specific_video_game_data_available_in_database_by_id_something(String)"
});
formatter.result({
  "duration": 48498336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Glue.verify_status_code(String)"
});
formatter.result({
  "duration": 201569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "Gran Turismo 3",
      "offset": 28
    }
  ],
  "location": "Glue.verify_the_id_and_name(String,String)"
});
formatter.result({
  "duration": 289421,
  "status": "passed"
});
formatter.uri("3_HTTPPostMethod.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SaranKumar"
    }
  ],
  "line": 3,
  "name": "To add a data to videoGame api",
  "description": "",
  "id": "to-add-a-data-to-videogame-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add data to Video Game Api",
  "description": "",
  "id": "to-add-a-data-to-videogame-api;add-data-to-video-game-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Read the data need to be post \"\u003cid\u003e\",\"\u003cname\u003e\",\"\u003creleaseDate\u003e\",\"\u003ccategory\u003e\",\"\u003crating\u003e\",\"\u003creviewScore\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-add-a-data-to-videogame-api;add-data-to-video-game-api;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "releaseDate",
        "category",
        "rating",
        "reviewScore"
      ],
      "line": 12,
      "id": "to-add-a-data-to-videogame-api;add-data-to-video-game-api;;1"
    },
    {
      "cells": [
        "15",
        "TrailVideoGame",
        "2019-10-13T00:40:48.058Z",
        "Combat",
        "Good",
        "30"
      ],
      "line": 13,
      "id": "to-add-a-data-to-videogame-api;add-data-to-video-game-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Add data to Video Game Api",
  "description": "",
  "id": "to-add-a-data-to-videogame-api;add-data-to-video-game-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Read the data need to be post \"15\",\"TrailVideoGame\",\"2019-10-13T00:40:48.058Z\",\"Combat\",\"Good\",\"30\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 31
    },
    {
      "val": "TrailVideoGame",
      "offset": 36
    },
    {
      "val": "2019-10-13T00:40:48.058Z",
      "offset": 53
    },
    {
      "val": "Combat",
      "offset": 80
    },
    {
      "val": "Good",
      "offset": 89
    },
    {
      "val": "30",
      "offset": 96
    }
  ],
  "location": "Glue.read_the_data_need_to_be_post(int,String,String,String,String,int)"
});
formatter.result({
  "duration": 518240912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Glue.verify_status_code(String)"
});
formatter.result({
  "duration": 176116,
  "status": "passed"
});
formatter.match({
  "location": "Glue.verify_json_body_message()"
});
formatter.result({
  "duration": 227431,
  "status": "passed"
});
formatter.uri("4_HTTPPutMethod.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SaranKumar"
    }
  ],
  "line": 3,
  "name": "To Update a data to videoGame api",
  "description": "",
  "id": "to-update-a-data-to-videogame-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add data to Video Game Api",
  "description": "",
  "id": "to-update-a-data-to-videogame-api;add-data-to-video-game-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Read the data need to be updated \"\u003cid\u003e\",\"\u003cname\u003e\",\"\u003creleaseDate\u003e\",\"\u003ccategory\u003e\",\"\u003crating\u003e\",\"\u003creviewScore\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body message \"\u003cname\u003e\",\"\u003ccategory\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-update-a-data-to-videogame-api;add-data-to-video-game-api;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "releaseDate",
        "category",
        "rating",
        "reviewScore"
      ],
      "line": 12,
      "id": "to-update-a-data-to-videogame-api;add-data-to-video-game-api;;1"
    },
    {
      "cells": [
        "15",
        "UpdatedVideoGame",
        "2019-10-13T00:40:48.058Z",
        "FairyTale",
        "Good",
        "40"
      ],
      "line": 13,
      "id": "to-update-a-data-to-videogame-api;add-data-to-video-game-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Add data to Video Game Api",
  "description": "",
  "id": "to-update-a-data-to-videogame-api;add-data-to-video-game-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Read the data need to be updated \"15\",\"UpdatedVideoGame\",\"2019-10-13T00:40:48.058Z\",\"FairyTale\",\"Good\",\"40\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body message \"UpdatedVideoGame\",\"FairyTale\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 34
    },
    {
      "val": "UpdatedVideoGame",
      "offset": 39
    },
    {
      "val": "2019-10-13T00:40:48.058Z",
      "offset": 58
    },
    {
      "val": "FairyTale",
      "offset": 85
    },
    {
      "val": "Good",
      "offset": 97
    },
    {
      "val": "40",
      "offset": 104
    }
  ],
  "location": "Glue.read_the_data_need_to_be_updated(int,String,String,String,String,int)"
});
formatter.result({
  "duration": 52606472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Glue.verify_status_code(String)"
});
formatter.result({
  "duration": 138347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UpdatedVideoGame",
      "offset": 26
    },
    {
      "val": "FairyTale",
      "offset": 45
    }
  ],
  "location": "Glue.verify_json_body_message(String,String)"
});
formatter.result({
  "duration": 126031,
  "status": "passed"
});
formatter.uri("5_HTTPDeleteMethod.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SaranKumar"
    }
  ],
  "line": 3,
  "name": "To Delete Specific data by ID Video Game data available",
  "description": "",
  "id": "to-delete-specific-data-by-id-video-game-data-available",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Delete Video Game details by id",
  "description": "",
  "id": "to-delete-specific-data-by-id-video-game-data-available;delete-video-game-details-by-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Delete Specific video game data available in database by id \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body delete message",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-delete-specific-data-by-id-video-game-data-available;delete-video-game-details-by-id;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 11,
      "id": "to-delete-specific-data-by-id-video-game-data-available;delete-video-game-details-by-id;;1"
    },
    {
      "cells": [
        "14"
      ],
      "line": 12,
      "id": "to-delete-specific-data-by-id-video-game-data-available;delete-video-game-details-by-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Delete Video Game details by id",
  "description": "",
  "id": "to-delete-specific-data-by-id-video-game-data-available;delete-video-game-details-by-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Delete Specific video game data available in database by id \"14\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Json body delete message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 61
    }
  ],
  "location": "Glue.delete_specific_video_game_data_available_in_database_by_id_(String)"
});
formatter.result({
  "duration": 22694710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Glue.verify_status_code(String)"
});
formatter.result({
  "duration": 130958,
  "status": "passed"
});
formatter.match({
  "location": "Glue.verify_json_body_delete_message()"
});
formatter.result({
  "duration": 146558,
  "status": "passed"
});
});