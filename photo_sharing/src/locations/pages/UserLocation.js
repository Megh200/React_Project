import React from "react";
import {useParams} from "react-router-dom";

import Locationlist from "../components/Locationlist";

const Userlocation = (props) =>{

    const user_locations = [
        {id:"loc1",
        tittle:"albert hall museum",
        pic:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRXT95DcGUEpc3qRxBk1DxeTBrtxYuyXNDL-fmNphvPOgvRE3HY0KN2_R03_tIN79Sp",
        desc:"The Albert Hall Museum in Jaipur is the oldest museum of the state and functions as the state museum of Rajasthan.",
        address:"Ram Niwas Garden, Ashok Nagar, Jaipur, Rajasthan 302007",
        userid:"1"
        },

        {id:"loc2",
        tittle:"delhi",
        pic:"https://www.shutterstock.com/image-photo/india-gate-sunrise-rajpath-new-600nw-2453461857.jpg",
        desc:"..",
        address:"...",
        userid:"1"
        },

        {id:"loc3",
        tittle:"red fort",
        pic:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrtBL79Rr8KB-Ft1VgTGmyajsXBHTvNIe2QFoKSQDaJ3jfU4Kmc3ya1DP6LXZFHntRspoqzL7wlxercsIlJ8qy7nZtt63_FRyeyo6x0tSPYIUKz9lJYXi7zKCBug6KnZ15FDuhC9Q=w270-h312-n-k-no",
        desc:"...",
        address:"...",
        userid:"2"
        }
    ];

    const userid = useParams().userid;
    const filtered_locations = user_locations.filter(i => i.userid === userid);
    console.log(filtered_locations);

    return(
        <Locationlist arr={filtered_locations} />
    );
};

export default Userlocation;