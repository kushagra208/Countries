import { gql, useQuery } from "@apollo/client";
export const AllContinents = gql`
query GETALLCONTINENTS {
    continents {
      code
      name
    }
  }
`


export const AllCountries = gql`
query GETALLCOUNTRIES {
  countries {
    code
    name
    currency
    native
    phone
    continent {
      code
      name
    }
  }
}`

export const AllLanguages = gql`
query GETALLLANGUAGES {
  languages {
    code
    name
    native
    rtl
  }
}`

export const Language = gql`
query Language($code: ID!) {
  language(code: $code) {
    name
    code
    native
    rtl
  }
}`


export const COUNTRY = gql`
query Query($code: ID!) {
  country(code: $code) {
    code
    name
    currency
    native
    phone
    continent {
      code
      name
    }
  }
}`


export const CONTINENT = gql`
query Query($code: ID!) {
  continent(code: $code) {
    code
    name
    countries {
      code
      name
      currency
    }
  }
}`