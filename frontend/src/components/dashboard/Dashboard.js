import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into {" "}
                                <span style={{ fontFamily: "monospace" }}>Valet</span> parking 👏
              </p>
                        </h4>

                        {/* <div>
                            {loading ? (
                                <div>Loading</div>
                            ) : (
                                    <div>
                                        {space.map((data) => (
                                            <div key={data._id}>
                                                <ul>
                                                    <li>
                                                        <h1>
                                                            <a href="/{data.id}">{data._id}</a>
                                                        </h1>
                                                    </li>
                                                    <li>
                                                        <img src={data.image} alt={data.name} />
                                                    </li>
                                                    <li>
                                                        <p>{data.address}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                        <div>
                            <h1>Add New Space</h1>
                            <form method="POST" action="http://localhost:8080/add-space">
                                <div>
                                    <label>Name</label>
                                    <input type="text" name="name" required />
                                </div>
                                <div>
                                    <label>Image</label>
                                    <input type="text" name="image" required />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <input type="text" name="address" required />
                                </div>

                                <div>
                                    <button type="submit">Add Space</button>
                                </div>
                            </form>
                        </div> */}

                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
            </button>
                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);