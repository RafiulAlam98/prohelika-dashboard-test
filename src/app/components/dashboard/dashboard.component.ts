import { BudgetReportComponent } from './budget-report/budget-report.component';
import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { NewsUpdateTrafficComponent } from './news-update-traffic/news-update-traffic.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';
import { ReportComponent } from './report/report.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SalesComponent } from './sales/sales.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { WebsiteTrafficComponent } from './website-traffic/website-traffic.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SalesComponent,
    RevenueComponent,
    CustomerComponent,
    ReportComponent,
    RecentSalesComponent,
    TopSellingComponent,
    RecentActivityComponent,
    BudgetReportComponent,
    WebsiteTrafficComponent,
    NewsUpdateTrafficComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
