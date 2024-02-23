import { Box } from '@chakra-ui/react'
import React from 'react'
import CreateAccount from './account/create/page'
import RetrieveAccount from './account/list-all/page'
import DeleteAccount from './account/delete/page'
import CreatePaymentIntent from './payment-intents/create/page'
import UpdatePaymentIntent from './payment-intents/update/page'
import RetrievePaymentIntent from './payment-intents/retrieve/page'
import CreateSetupIntents from './setup-intents/create/page'
import ListAllPaymentIntents from './payment-intents/list-all/page'

const StripePage = () => {
  return (
    <Box>
      <CreateAccount />
      <RetrieveAccount />
      <DeleteAccount />
      <CreatePaymentIntent />
      <UpdatePaymentIntent />
      <RetrievePaymentIntent />
      <CreateSetupIntents />
      {/* <ListAllPaymentIntents /> */}
    </Box>
  )
}

export default StripePage
