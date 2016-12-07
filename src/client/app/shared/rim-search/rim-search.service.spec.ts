import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { RimSearchService } from './rim-search.service';

export function main() {
  describe('RimSearch Service', () => {
    let nameListService: RimSearchService;
    let mockBackend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {

      let injector = ReflectiveInjector.resolveAndCreate([
        RimSearchService,
        BaseRequestOptions,
        MockBackend,
        {provide: Http,
          useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]);
      nameListService = injector.get(RimSearchService);
    //   mockBackend = injector.get(MockBackend);

    //   let connection: any;
    //   mockBackend.connections.subscribe((c: any) => connection = c);
      initialResponse = nameListService.search('term');
    //   connection.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve the search term', () => {
      let response: any;
      initialResponse.subscribe((data: any) => response = data);
      expect(response).toEqual({term: 'term'});
    });
  });
}
