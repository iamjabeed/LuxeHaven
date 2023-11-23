import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useProfileMutation } from "../../redux/api/usersApislice";
import { setCredentials } from "../../redux/features/auth/authSlice";

import Loader from "../../components/Loader";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        if (username === userInfo.username || email === userInfo.email) {
          toast.error("Please enter unique username and email");
          return null;
        }
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        setPassword("");
        setConfirmPassword("");
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="bg-[#0E1629] min-h-screen">
      <div className="px-4 flex justify-around items-center flex-wrap gap-8 w-full text-gray-500 overflow-hidden">
        <form
          onSubmit={submitHandler}
          className="container w-[21rem] md:w-[33rem] 2xl:w-[36rem]"
        >
          <h2 className="text-lg md:text-2xl 2xl:text-2xl font-medium mb-2 text-white">
            Update Profile
          </h2>
          <div>
            <label className="flex items-center gap-3 text-lg font-medium mb-2 ">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="mt-1 p-2 border rounded w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0E1629] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 text-lg font-medium mb-2 ">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-1 p-2 border rounded w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0E1629] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 text-lg font-medium mb-2 ">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 p-2 border rounded w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0E1629] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 text-lg font-medium mb-2 ">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 p-2 border rounded w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0E1629] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center gap-3 w-[320px] md:w-[460px] 2xl:w-[520px]">
            <button className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[45%] px-4 py-2 rounded cursor-pointer text-base font-semibold">
              <Link to="/user-orders">My Orders</Link>
            </button>
            <button
              type="submit"
              className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none  w-[45%] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
            >
              Update
            </button>
          </div>
          {loadingUpdateProfile && <Loader />}
        </form>
      </div>
    </div>
  );
};
export default Profile;
