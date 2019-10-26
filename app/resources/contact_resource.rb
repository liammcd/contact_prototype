class ContactResource < JSONAPI::Resource
	attributes :first_name, :last_name, :address, :phone_number
end