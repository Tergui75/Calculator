import { ref, computed } from "vue";
import useSupabase from "boot/supabase";


// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user = ref(null);
const { supabase } = useSupabase();

supabase.auth.onAuthStateChange((_event, session) => {
  //const { populateCounters } = useAPI();

  user.value = session?.user || null;
});

export default function useAuthUser() {
  // signin with email and password
  const signIn = async ({ email, password }) => {
    console.log(email, password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error);
      debugger;
      throw error;
    }
    return data.user;
  };

  const signInWithGoogle = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ provider: 'google' });
      
      if (error) {
        throw error;
      }
      
      return user;
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google:', error.message);
      throw error;
    }
  };

  // Logout
  const signOut = async () => {
    const oldUser = user.value;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return oldUser;
  };

  // Determine whether the user is logged in
  const isSignedIn = computed(() => !!user.value);

  // Signup
  const signUp = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        // arbitrary meta data is passed as the second argument under a data key
        // to the Supabase signUp method
        data: meta,
        // the to redirect to after the user confirms their email
        // window.location wouldn't be available if we were rendering server side
        // but since we're all on the client it will work fine
        //redirectTo: `${window.location.origin}/`
        redirectTo: "/",
      }
    );
    if (error) throw error;
    return user;
  };

  // Update user account data: email, password, or meta data
  // const update = async (data) => {
  //   const { user, error } = await supabase.auth.update(data)
  //   if (error) throw error
  //   return user
  // }

  // Send user an email to reset their password
  // const sendPasswordRestEmail = async (email) => {
  //   const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)
  //   if (error) throw error
  //   return user
  // }

  // const resetPassword = async (accessToken, newPassword) => {
  //   const { user, error } = await supabase.auth.api.updateUser(
  //     accessToken,
  //     { password: newPassword }
  //   )
  //   if (error) throw error
  //   return user
  // }

  return {
    isSignedIn,
    signIn,
    //signInWithGoogle,
    signOut,
    signUp,
    user,
    // update,
    // sendPasswordRestEmail,
    // resetPassword
    // maybeHandleEmailConfirmation,
  };
}
