export const getUser = async (token) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_CAOFIT_API}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async (credentials) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_CAOFIT_API}/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_CAOFIT_API}/users/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
