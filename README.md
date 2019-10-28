# README

Contact Manager Prototype. Supports viewing, creating, deleting, and editing of contacts.

Uses a postgres database with username: `contact_prototype` and password: `contact_password`

Seed database with `rake db:seed`

Run `rails server` to start backend server.

Uses jsonapi-resources to provide a JSON api for interacting with ember frontend

`cd frontend/ && npm install && ember serve` to run the frontend

Visit `localhost:4200` to use the app