import React from 'react';
import {TbCircleDashed} from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10">
        <div className="flex items-center">

        <div className="w-[15%]">
            <img style={{ width: '128px', height: '128px', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381__340.jpg" alt="Rounded Image"/>
        </div>

            <div className="space-y-5 text-xs">
                <div className="flex space-x-10 items-center">
                    <p>username</p>
                    <button>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>

               <div className="flex space-x-10">
                <div>
                    <span className="font-semibold mr-2">10</span>
                    <span>Posts</span>
                </div>
                <div>
                    <span className="font-semibold mr-2">100</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span className="font-semibold mr-2">50</span>
                    <span>Following</span>
                </div>
               </div>

               <div>
                <p className="font-bold"> Full Name</p>
                <p className="font-thin text-sm">Here goes the bio of the user</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProfileUserDetails