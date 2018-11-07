import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
	const { 
		thumbnail_image, 
		title, 
		artist, 
		image 
	} = album;

	const { 
		thumbnailContainerStyle, 
		thumbnailStyle, 
		headerContentStyle, 
		headerTextStyle, 
		imageStyle 
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						source={{ uri: thumbnail_image }} 
						style={thumbnailStyle} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					source={{ uri: image }} 
					style={imageStyle} 
				/>
			</CardSection>
		</Card>
	);
};

const styles = {
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
