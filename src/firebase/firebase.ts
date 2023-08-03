import { ConfigModule } from '@nestjs/config';
import firebase from 'firebase-admin';

ConfigModule.forRoot();

const FIREBASE_PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDNgW2l2eqSE8ri\nbCc1NlPq+Lh7xBGU/MIjYdgvAu5z3BjQhgTUZxI3f2EFnhKyNYfhjj/lhvU+2TwE\nE69x6UgYj/IN/9/ciTJsU8ACi7SrgVhMerbXf/o7HMuAYR8HLWatWLck8Lgj9UO8\nVccRSYpSrSWDfdRAoToL5IRcltrmujWO+pvmzT19wj9jw4aDOLjzbTeSgc4XXDMn\nBTn8PBhB8eeYXQO7kd5a+01awU/dlBGBtld7DsFORuP9uXHtJifNv5lYY6YRmu/V\nOiMaY87U/m3ZX11K+n9tHXUZjxwJw2gIR8CCtnrqRVJspOB1Ymufx5353kU0+8XF\nyfAdu5/jAgMBAAECggEAGKShdDwbpl+25QxIxAHwnI0t0N2eqXSJMo/8SgrlHZdH\nkdMjB3YYAk1ajOoQiOE6xZ/2u+dBR8OUsFJ3UpwW9/xkRNcpo5BU2muilfY7Iz5+\noFEuKs0JwdvpRUr1hblP24/3X6J5b7UXZcwNc95ojBMqRp3TUtq36LmC681v5i84\nF4sibnkhhNkphZWjlE8577W35KxGG0MkkorMgo8/J9ICP7ctZj87NxaiFDmfFzYV\nsuVB4K16Fn4dZHlgSIZZbRA9a/Z5qEKQrISolTIg49KbyLog24Db+NJd+ze3Q1OW\n0lCbY7eGtp6LHQ+5lfYKRAVEwdK4IcQBuGVt1v3DwQKBgQDxOmmP2jRM9gn2h48z\nuzXp5qthTHrn6uLdBd7jqJ2tOzJlOtP2wgL6ezfMCtRpr7muUTApn1//YqUW8G3h\n/23jExsZlUbjEuvE4yN+2q/Zq29/AKdpTKG6RKRIrAhd2qGiv6uSwFzBdf8P6Sf8\nDN3cO7THfKkekEnAbCwiAFf7QQKBgQDaFwO42YHZhw/9t+T/lNvK3bVsMnzLZse6\nSRthKC1ot3/DdXVh8t1+j7oV5sGq4dK8PSX3SV3kiwOT+Ph4xsyoDtUKnHGomgKO\nVYiwKkRslUtMfPrahAg6z/pubrhB2wSJDO4PSosHV1yC/farGQJr+uj97GAXaODL\nGT5ljWDGIwKBgF/1UoSs0l1DCleNOUPk1t+CqO39lG6pGzG84htBuedtQvDN4/+m\n0bR+S4XZUQHxqzVSiowkH/XhcbacUbmy+C16Li+RGC/AGRWrHTWbHJTEA4hL5EyY\n9US5hXh7JqDfFak+AaxQ5RT4MUxM/WDgZWj0P0eTqVrFHvFylmO4K0eBAoGAEMxl\nBP/7+H1mxew8P1N/+ohJSSQ6aJBqIfcvnLQzizVXKf8KI5lJZk47zyQPFtJ+IPG0\n0u9bxBbRF7y9ps/pQ6ig0EhsmMgEGmKMPMWEr7hwLFwUFnDFEYKjj44Hs0rjdosA\naz0aqF4aShy1u0gZ36db+vMSE7uIVRyEqd3R7nECgYAGiYqdQEPmpu9STyU6i3it\nuss9KUlloSZ5bBNMZigycCmPPgy5FeajgpG78MpieJTas0rRnBQOyqRTvmCxutd5\nL7lgLGFr0l3ETawSCV4ZPY/OYmSvWDV186NJzGYUsfxIVeykHtfps6GYWoX/xnzo\nLR9aW/Bn2q3eMihrkyqEsQ==\n-----END PRIVATE KEY-----\n';

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY,
  }),
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();
