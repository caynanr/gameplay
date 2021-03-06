import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"

import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,

  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 21,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  members: {
    marginLeft: 24,
    marginTop: 27
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
})

