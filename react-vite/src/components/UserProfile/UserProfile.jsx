/***********************************************************************************************************************************************/
//*                             IMPORTS
/***********************************************************************************************************************************************/

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { editUser, getUserById, userNameCheck } from "../../redux/session";

import CustomModal from "../../context/CustomModal";

import "./UserProfile.css";

import { Navigate } from "react-router-dom";

/***********************************************************************************************************************************************/
//*                             INIT/Function declaration
/***********************************************************************************************************************************************/

const UserProfile = () => {
  const user = useSelector((state) => state.session.user);

  useEffect(()=> {
          dispatch(getUserById(user.id))
      },[dispatch]); 

/***********************************************************************************************************************************************/
//*                            Edit button Modal
/***********************************************************************************************************************************************/
  
  const [showEdit, setShowEdit] = useState(false);
  const [errors, setEditErrors] = useState({});
  // const [userToEdit, setUserToEdit] = useState(); //!!!!
  // const [editName,setEditName] = useState(); //!!!!
  const [username,setUsername] = useState(user.username);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);   

  const handleEdit = (e, username, firstname, lastname, email) => {
      e.preventDefault();
      e.stopPropagation();

      setEditErrors({});
      let validationErrors = {};
      if (username.length < 1){
          validationErrors.username = "UserName must be at least 1 character";
      }
      if (firstname.length < 1){
        validationErrors.firstname = "first name must be at least 1 character";
      }
      if (lastname.length < 1){
        validationErrors.lastname = "last name must be at least 1 character";
      }
      //! must query username table to determine if username already exists
      const userNameTaken = dispatch(userNameCheck(username));
      if (userNameTaken){
        validationErrors.username = `${username} is already taken!`;
      }
      //!must query email table to see if email already exists
      const emailTaken = dispatch(emailCheck(email));
      if (emailTaken){
        validationErrors.email = `${email} is already taken!`;
      }
      if (Object.keys(validationErrors).length > 0) { //!ERROR HANDLING MUST BE ADDED IN HTML
          setEditErrors(validationErrors);
          return;
      }

      dispatch(editUser({username, firstname, lastname, email})); //!!!!
      setShowEdit(false);
  };

  //toggle for modal
  const editEvent = (e) => { //!DOES THE EDIT EVENT NEED THE USER OBJ??? (I THINK NO)
    e.preventDefault();
    e.stopPropagation();
    setUsername(user.username);
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setEmail(user.email);   
    setShowEdit(!showEdit);
  };

/***********************************************************************************************************************************************/
//*                            Delete button Modal
/***********************************************************************************************************************************************/
    
  //set modal state
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  //flask db init, flask db migrate -m "text", flask db upgrade, flask seed  all
  const handleDelete = (e, portfolioId)=> {
      e.preventDefault();
      e.stopPropagation();
      dispatch(deleteUser(user.id))
      Navigate(`/`)
      };

  //toggle for modal
  const deleteEvent = (e) => { //opens and closes modal
      e.preventDefault();
      e.stopPropagation();
      setShowConfirmDelete(!showConfirmDelete);
  };

/***********************************************************************************************************************************************/
//*                            Deposite funds button
/***********************************************************************************************************************************************/
  
  const [money, setMoney] = useState();

  const handleDeposite = (e, money)=> {
    e.preventDefault();
    e.stopPropagation();
    dispatch(depositFunds({money,userId:user.id}))
    dispatch(getUserById(user.id))
    };

/***********************************************************************************************************************************************/
//*                             HTML
/***********************************************************************************************************************************************/  

  return (
    <div id="userProfile">
      <h1>{user.username} Profile</h1>
      <div className="profileSec">
        <div className="profileSec1">
          <div>
            <img
              title={`${user.username} profile picture`}
              src="https://i.pinimg.com/736x/a8/4a/a3/a84aa310f33862e53c30f55bdf94b013.jpg"
              alt={`${user.username} profile picture`}
            />
          </div>
          <div className="userSec">
            <div>
              <h2>
                {user.firstname}, {user.lastname}
              </h2>
            </div>
            <div className="userBtn">
            <button type="button" onClick={(e) => editEvent(e)}>Edit User</button>
              <button className="profileDeleteBtn">Delete Profile</button>
            </div>
          </div>
        </div>
        <div className="profileSec2">
          <div>
            <h2 className="addFunds">Add Funds</h2>
              <p className="userAccountBalance">Account balance: {user.account_balance}</p>
              <label className="addFunds">                 
                  <input
                      type="integer"
                      placeholder="$"
                      value={money}
                      onChange={(e) => setMoney(e.target.value)}
                  />   
              </label> 
              <button type="button" onClick={(e) => handleDeposit(e, money)}>Deposit</button>
              <button type="button" >Withdraw</button>
          </div>
        </div>
      </div>

      {/* Edit PORTFOLIO MODAL */}
      <>{showEdit && 
          <CustomModal onClose={(e) => editEvent(e)}>
              <div className='editUserTitle'>Edit User info</div>
              <div className='editButtons'>
              <label className="editUsername">                 
                  <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                   {errors.username && <span className="profileErrors">{errors.username}</span>}
              </label>   
              <label className="editFirstname">                 
                  <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                  /> 
                  {errors.firstname && <span className="profileErrors">{errors.firstname}</span>}
              </label> 
              <label className="editLastname">                 
                  <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                  />
                  {errors.lastname && <span className="profileErrors">{errors.lastname}</span>}  
              </label> 
              <label className="editEmail">                 
                  <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  /> 
                  {errors.email && <span className="profileErrors">{errors.email}</span>}  
              </label> 
              <button type="button" onClick={(e) => handleEdit(e, username, firstname, lastname, email)}>Confirm Change</button>
              <button type="button" onClick={editEvent}>cancel</button>
              </div>
          </CustomModal>}

          {/* DELETE MODAL */}
          <>{showConfirmDelete && 
              <CustomModal onClose={deleteEvent}>
                  <div className="deleteMessage">This will permanently delete your profile, confirm delete?</div>
                  <div className='deleteButtons'>
                  <button type="button" onClick={(e) => handleDelete(e)}>Confirm</button>
                      <button type="button" onClick={(e) => deleteEvent(e)}>Cancel</button>
                  </div>
              </CustomModal>}
          </>
      </>
    </div>
  );
};

export default UserProfile;
