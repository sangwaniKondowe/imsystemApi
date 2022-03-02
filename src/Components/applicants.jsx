import React from 'react'
import {PageHeader} from './Common/CommonComponents'
import {Box} from '@material-ui/core'
import faker from 'faker'

let User = [];
for (let i =0; i < 10; i ++){
    User[i] = {
        Fname: faker.name.firstName(),
        Lname: faker.name.LastName(),
        gender: faker.name.gender(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.faker.internet.email(),

    }
}
consolo.log(User)
function applicants() {
    return (
       <Box>
        <PageHeader pageTitle="All Applicants "/>


       </Box>
    )
}

export default applicants
