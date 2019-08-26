import React, { Component } from 'react';
import propTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { userProfiles, userArticles } from '../actions/profileActions';
import Loader from '../components/Loader';
import ProfileItem from '../components/Profile/ProfileHeader';
import ProfileArticles from '../components/Profile/ProfileArticles';

class Profiles extends Component {
  componentDidMount() {
    const { match: { params: { userId } }, location: { search } } = this.props;
    const parsed = queryString.parse(search);
    const { limit } = parsed;
    console.log(parsed);
    // console.log(search);
    if (userId) {
      this.props.userProfiles(userId);
      this.props.userArticles(userId, limit);
    }
  }

  render() {
    const { profiles, loading, profileArticles } = this.props.profile;

    let profileContent;

    if (profiles === null || loading) {
      profileContent = <Loader />;
    // check if user is has a profile
    } else if (Object.keys.length > 0) {
      profileContent = (
        <div>
          <ProfileItem profile={profiles} articlesLength={profileArticles && profileArticles.length} />
          <ProfileArticles articles={profileArticles} />
        </div>
      );
    } else {
      profileContent = <h3>No Profile Found for this user</h3>;
    }
    return (
      <div className="profile-div">
        {profileContent}
      </div>
    );
  }
}

Profiles.defaultProps = {
  match: { },
};

Profiles.propTypes = {
  userProfiles: propTypes.func.isRequired,
  userArticles: propTypes.func.isRequired,
  profile: propTypes.objectOf(propTypes.any).isRequired,
  match: propTypes.objectOf(propTypes.any),
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { userProfiles, userArticles })(Profiles);
