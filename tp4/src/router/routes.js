const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "IndexPage",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      {
        name: "signInPage",
        path: "signInPage",
        component: () => import("src/pages/SignInPage.vue"),
        // component: SignInPage
      },
      {
        name: "signUpPage",
        path: "signUpPage",
        component: () => import("src/pages/SignUpPage.vue"),
        // component: SignUpPage
      },
      {
        name: "emailConfirmationPage",
        path: "emailConfirmationPage/:email",
        props: true,
        component: () => import("src/pages/EmailConfirmationPage.vue"),
        // component: EmailConfirmationPage
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
