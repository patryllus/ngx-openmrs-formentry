import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterViewerComponent } from './encounter-view/encounter-viewer.component';
import { EncounterContainerComponent } from './encounter-container/encounter-container.component';
import { EncounterViewerService } from './encounter-viewer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlComponent } from './display-controls/question-control.component';
import { FilePreviewComponent } from './display-controls/file-preview.component';
import { RemoteAnswerComponent } from './display-controls/remote-answer.component';
// import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared.module';
let EncounterViewerModule = class EncounterViewerModule {
};
EncounterViewerModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            EncounterViewerComponent,
            EncounterContainerComponent,
            QuestionControlComponent,
            FilePreviewComponent,
            RemoteAnswerComponent
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            // HttpModule,
            SharedModule
        ],
        providers: [
            EncounterViewerService
        ],
        exports: [
            EncounterContainerComponent
            // HttpModule
        ],
    })
], EncounterViewerModule);
export { EncounterViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb3VudGVyLXZpZXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW1wYXRoLWtlbnlhL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImVuY291bnRlci12aWV3ZXIvZW5jb3VudGVyLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBd0JoRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBdkJqQyxRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVix3QkFBd0I7WUFDeEIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIscUJBQXFCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osY0FBYztZQUNkLFlBQVk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLHNCQUFzQjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNMLDJCQUEyQjtZQUMzQixhQUFhO1NBQ2hCO0tBQ0osQ0FBQztHQUNXLHFCQUFxQixDQUFHO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRW5jb3VudGVyVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9lbmNvdW50ZXItdmlldy9lbmNvdW50ZXItdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbmNvdW50ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VuY291bnRlci1jb250YWluZXIvZW5jb3VudGVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW5jb3VudGVyVmlld2VyU2VydmljZSB9IGZyb20gJy4vZW5jb3VudGVyLXZpZXdlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUXVlc3Rpb25Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xzL3F1ZXN0aW9uLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xzL2ZpbGUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVtb3RlQW5zd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xzL3JlbW90ZS1hbnN3ZXIuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC5tb2R1bGUnO1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRW5jb3VudGVyVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBFbmNvdW50ZXJDb250YWluZXJDb21wb25lbnQsXG4gICAgICAgIFF1ZXN0aW9uQ29udHJvbENvbXBvbmVudCxcbiAgICAgICAgRmlsZVByZXZpZXdDb21wb25lbnQsXG4gICAgICAgIFJlbW90ZUFuc3dlckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAvLyBIdHRwTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEVuY291bnRlckNvbnRhaW5lckNvbXBvbmVudFxuICAgICAgICAvLyBIdHRwTW9kdWxlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRW5jb3VudGVyVmlld2VyTW9kdWxlIHt9XG4iXX0=