import Main from "./Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client = {client} >
    <Provider store = {store}>
      <Main />
    </Provider>
    </ApolloProvider>
  )
}
