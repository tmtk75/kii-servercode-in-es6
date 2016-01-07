endpoint=localhost:3000/api/apps/an-app_id/server-code/versions/current

sync:
	curl -v -XPOST \
	  -H"content-type: application/json" \
	  $(endpoint)/hello_world \
	  -d '{"a":1234}'

async:
	curl -v -XPOST \
	  -H"content-type: application/json" \
	  $(endpoint)/example_1 \
	  -d '{"username": "foobar1", "password": "abc123"}'
