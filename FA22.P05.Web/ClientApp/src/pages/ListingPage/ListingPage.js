import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import baseUrl from "../../baseUrl";
import { render } from "../../index";
import "./ListingPage.css";

export const Listing = () => {
  const navigate = useNavigate();
  const [listings, setlistings] = useState();
  const [didLoad, setDidLoad] = useState(false);
  const [Error, setError] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/api/listings`).then((response) => {
      console.log("message");
      if (response.data.hasErrors) {
        response.data.errors.forEach((err) => {
          console.error(`${err.property}: ${err.message}`);
          setError(err.message);
        });
      }
      setlistings(response.data);
      setDidLoad(true);
    });
  }, []);

  if (Error !== "") {
    return <div>Error Occurred</div>;
  } else if (!didLoad) {
    return (
      <div style={{ height: "100%", width: "100%" }} className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    );
  }
  const listingsToShow = listings?.data;

  return (
    <div className=".flex-box-centered-content-listing-getById">
      {listingsToShow &&
        listingsToShow.map((x) => {
          return (
            <div className="flex-row-fill-listing-getById">
              <Segment raised className="listing-getById-segments">
                <div></div>
                <div></div>
                <div className="button-container-listing-getById">
                  <Button
                    color="violet"
                    onClick={() => {
                      navigate.push(
                        render.listingGetById.replace(":id", `${x.id}`)
                      );
                    }}
                  >
                    See More
                  </Button>
                </div>
              </Segment>
            </div>
          );
        })}
    </div>
  );
};
export default Listing;