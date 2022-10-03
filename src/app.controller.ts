import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";


@Controller()
export class AppController {
  @Get(['/', 'index'])
  @Render('index.hbs')
  root() {
    return {};
  }

  @Get('registration')
  @Render('registration.hbs')
  getRegistration() {
    return {};
  }

  @Get('exclusive')
  @Render('exclusiveTracks.hbs')
  getExclusive() {
    return {};
  }

  @Get('lease')
  @Render('leaseTracks.hbs')
  getLease() {
    return {};
  }

  @Get('licensInfo')
  @Render('licensInfoTracks.hbs')
  getLicensInfo() {
    return {};
  }

  @Get('premium')
  @Render('premiumTracks.hbs')
  getPremium() {
    return {};
  }

  @Get('trackout')
  @Render('trackoutTracks.hbs')
  getTrackout() {
    return {};
  }

  @Get('unlimited')
  @Render('unlimitedTracks.hbs')
  getUnlimited() {
    return {};
  }

  @Get('privacy')
  @Render('privacyTracks.hbs')
  getPrivacy() {
    return {};
  }

  @Get('terms')
  @Render('termsTracks.hbs')
  getTerms() {
    return {};
  }

  @Get('login')
  @Render('login.hbs')
  getLogin() {
    return {};
  }

  @Get('chat')
  @Render('chat.hbs')
  chat() {
    return {};
  }
}
