import { Component, OnInit } from '@angular/core';
import { UrlProviderService } from '../../services/url-provider.service';

@Component({
  selector: 'h2o-digital-manager-unauthorized-container',
  templateUrl: './unauthorized-container.component.html',
  styleUrls: ['./unauthorized-container.component.scss'],
})
export class UnauthorizedContainerComponent implements OnInit {
  h2oUrl = this.urlProvider.h2oUrl;

  constructor(private urlProvider: UrlProviderService) {}

  ngOnInit() {}
}
