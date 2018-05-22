import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { HeadlineText, BodyText } from '../Typography';
import CallToAction from '../CallToAction';
import { BODY_TEXT_COLOR_LIGHTER } from '../../config/colors';

// const headerHeight = 60;

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  header: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    height: 60,
    alignItems: 'center',
    zIndex: 5,
  },
  headerRight: {
    top: (Platform.OS === 'ios') ? 25 : 10,
    position: 'absolute',
    right: 10,
    zIndex: 5,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
  },
  newsContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  newsDate: {
    color: BODY_TEXT_COLOR_LIGHTER,
  },
});

const PageHeader = ({ news, navigation }) => {
  const {
    container,
    header,
    headerRight,
    backgroundImage,
  } = styles;

  const renderHeaderRight = () => (
    <View style={headerRight}>
      <CallToAction
        onPress={() => {}}
        title="Manage"
      />
    </View>
  );

  const renderHeader = () => (
    <View style={header}>
      <HeadlineText>UPDATES</HeadlineText>
      {renderHeaderRight()}
    </View>
  );

  const renderBackgroundImage = () => (
    <Image
      source={{ uri: news && news.image }}
      style={backgroundImage}
    />
  );

  const navigateToNewsDetailPage = () => navigation.navigate('NewsDetail', { newsTitle: news.title, newsBody: news.body });

  const renderHeaderNews = () => (
    <TouchableWithoutFeedback onPress={navigateToNewsDetailPage}>
      <View style={styles.newsContainer}>
        <BodyText style={styles.newsDate}>
          {news.date || ' '}
        </BodyText>
        <HeadlineText>
          {news.title || ' '}
        </HeadlineText>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={container}>
      {renderHeader()}
      {renderBackgroundImage()}
      {renderHeaderNews()}
    </View>
  );
};

PageHeader.defaultProps = {
  news: {},
};

PageHeader.propTypes = {
  navigation: PropTypes.shape().isRequired,
  news: PropTypes.shape(),
};

export default PageHeader;
