import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center my-5">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-semibold text-blue-600'>Dashboard</h1>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='font-semibold'><Link to='/dashboard'>My Orders</Link></li>
                        <li className='font-semibold'><Link to='/dashboard/reviews'>My Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;